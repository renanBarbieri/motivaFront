
export namespace LocalStorage {

  function storageAvailable(type) {
    const storage = window[type];
    try {
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
    }
  }

  export function set(key: string, value: any) {
    if(storageAvailable("localStorage")){
      window.localStorage.setItem(key, value);
    }
    else {
      throw new Error("Local Storage não está disponível.")
    }
  }

  export function get(key: string): string {
    if(storageAvailable("localStorage")){
      return window.localStorage.getItem(key);
    }
    else {
      throw new Error("Local Storage não está disponível.")
    }
  }

  export function erase(key: string) {
    if(storageAvailable("localStorage")){
      return window.localStorage.removeItem(key);
    }
    else {
      throw new Error("Local Storage não está disponível.")
    }
  }
}
