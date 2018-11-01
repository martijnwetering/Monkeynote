import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  RequestInfo,
  ResponseOptions,
  STATUS,
  getStatusText
} from 'angular-in-memory-web-api';
import { Notebook } from '../notes/shared/notebook.model';
import { default as Delta } from 'quill-delta';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  private rootPath = 'http://localhost:5200/';
  private apiBase = '/api/v1/notes/';
  private host = 'http://localhost:5200';

  constructor() { }

  put(reqInfo: RequestInfo) {
    let path = reqInfo.url.substring((this.host + this.apiBase).length);
    if (path.includes('notes')) {
      let notebook: Notebook = reqInfo.collection.find(nb => nb.id === reqInfo.id);
      let note = reqInfo.utils.getJsonBody(reqInfo.req);
      let notes = notebook.notes.map(n => n.id === note.id ? note : n);
      notebook.notes = notes.sort();
      return reqInfo.utils.createResponse$(() => {
        console.log('HTTP PUT override');

        // const collection = villains.slice();
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const id = reqInfo.id;

        // tslint:disable-next-line:triple-equals
        // const data = id == undefined ? collection : reqInfo.utils.findById(collection, id);
        const data = note;

        const options: ResponseOptions = data ?
          {
            body: dataEncapsulation ? { data } : data,
            status: STATUS.OK
          } :
          {
            body: { error: `'Notebook' with id='${id}' not found` },
            status: STATUS.NOT_FOUND
          };
        return this.finishOptions(options, reqInfo);
      });
    }

    return undefined;
  }

  post(reqInfo: RequestInfo) {
    let path = reqInfo.url.substring((this.host + this.apiBase).length);
    if (path.includes('notes')) {
      const notebook: Notebook = reqInfo.collection.find(nb => nb.id === reqInfo.id);
      const note = reqInfo.utils.getJsonBody(reqInfo.req);
      let maxNoteId = Math.max(...reqInfo.collection.flatMap((nb: Notebook) => nb.notes.map(n => n.id)));
      note.id = ++maxNoteId;
      notebook.notes.push(note);
      return reqInfo.utils.createResponse$(() => {
        console.log('HTTP POST override');

        // const collection = villains.slice();
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const id = reqInfo.id;

        // tslint:disable-next-line:triple-equals
        // const data = id == undefined ? collection : reqInfo.utils.findById(collection, id);
        const data = note;

        const options: ResponseOptions = data ?
          {
            body: dataEncapsulation ? { data } : data,
            status: STATUS.OK
          } :
          {
            body: { error: `'Notebook' with id='${id}' not found` },
            status: STATUS.NOT_FOUND
          };
        return this.finishOptions(options, reqInfo);
      });
    }

    return undefined;
  }

  // parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
  //   let parsed = utils.parseRequestUrl(url);
  //   console.log('parsed url: ', this.parseUri(url));
  //   return parsed;
  // }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    try {
      let loc = this.getLocation(url);
      let drop = 0;
      let urlRoot = loc.protocol + '://' + loc.host;
      // if (loc.host !== this.config.host) {
      //   // url for a server on a different host!
      //   // assume it's collection is actually here too.
      //   drop = 1; // the leading slash
      //   urlRoot = loc.protocol + '//' + loc.host + '/';
      // }
      console.log(loc);
      let path = loc.path.substring(drop);
      let pathSegments = path.split('/');
      console.log(pathSegments);
      let segmentIx = 0;
      // apiBase: the front part of the path devoted to getting to the api route
      // Assumes first path segment if no config.apiBase
      // else ignores as many path segments as are in config.apiBase
      // Does NOT care what the api base chars actually are.
      let apiBase = void 0;
      // tslint:disable-next-line:triple-equals
      // if (this.config.apiBase == undefined) {
      //   apiBase = pathSegments[segmentIx++];
      // } else {
      apiBase = this.removeTrailingSlash(this.apiBase.trim());
      if (apiBase) {
        segmentIx = apiBase.split('/').length;
        console.log(pathSegments);
      } else {
        segmentIx = 0; // no api base at all; unwise but allowed.
      }
      // }
      apiBase += '/';
      let collectionName = pathSegments[segmentIx++];
      // ignore anything after a '.' (e.g.,the "json" in "customers.json")
      collectionName = collectionName && collectionName.split('.')[0];
      let id = pathSegments[segmentIx++];
      let query = this.createQueryMap(loc.query);
      let resourceUrl = urlRoot + apiBase + collectionName;
      console.log(resourceUrl);
      return {
        apiBase: apiBase,
        collectionName: collectionName,
        id: id,
        query: query,
        resourceUrl: resourceUrl
      };
    } catch (err) {
      let msg = 'unable to parse url \'' + url + '\'; original error: ' + err.message;
      throw new Error(msg);
    }
  }

  private getLocation(url: string) {
    if (!url.startsWith('http')) {
      // get the document iff running in browser
      let doc = typeof document === 'undefined' ? undefined : document;
      // add host info to url before parsing.  Use a fake host when not in browser.
      let base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
      url = url.startsWith('/') ? base + url : base + '/' + url;
    }
    return this.parseUri(url);
  }

  private createQueryMap(search) {
    return search ? new URLSearchParams(search).paramsMap : new Map();
  }

  private parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    let URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    let m = URL_REGEX.exec(str);
    let uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    let keys = Object.keys(uri);
    let i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
  }

  private removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
  }

  createDb() {
    let notebooks: Notebook[] = [
      {
        id: 1,
        title: 'Marvel vilains notebooks',
        defaultNotebook: true,
        notes: [
          {
            id: 1,
            title: 'Ultron',
            text: this.textAsDelta('Very dangerous robot with laserbeam hands. Do not get close.')
          },
          {
            id: 2,
            title: 'Hella',
            text: this.textAsDelta('Olmost impossible to defeat. Draws here power from Asgard.')
          },
          {
            id: 3,
            title: 'Thanos',
            text: this.textAsDelta('Need all possible heroes to fight this guy. Purple looking!')
          }
        ]
      },

      {
        id: 2,
        title: 'DC heroes notebooks',
        defaultNotebook: false,
        notes: [
          {
            id: 4,
            title: 'Batman',
            text: this.textAsDelta('Entered his goth fase after his 30th birthday.')
          },
          {
            id: 5,
            title: 'Superman',
            text: this.textAsDelta('Indestructable')
          },
          {
            id: 6,
            title: 'Wonder Woman',
            text: this.textAsDelta('Nice personality. Don\'t get her angry! Cool lasso.')
          }
        ]
      },

      {
        id: 3,
        title: 'Best fantasy books',
        defaultNotebook: false,
        notes: [
          {
            id: 7,
            title: 'Game of thrones',
            text: this.textAsDelta('Backstabbing at its finest')
          },
          {
            id: 8,
            title: 'Malazan book of the fallen',
            text: this.textAsDelta('Great characters and magic system.')
          },
          {
            id: 9,
            title: 'Name of the wind',
            text: this.textAsDelta('Simply the best fantasy book out there.')
          }
        ]
      }
    ];

    return { notebooks };
  }

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }

  private textAsDelta(text: string): Delta {
    return new Delta({
      ops: [
        {
          insert: `${text}\n`
        }
      ]
    });
  }
}
