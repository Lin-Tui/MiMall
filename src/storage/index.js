const STORAGE_KEY = 'mall';
export default{
    getStorge() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) {
                return val[key]
            }
        }
        return this.getStorge()[key]
    },
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val)
        } else {
            let val = this.getStorge();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }

    },
    clear(key, module_name) {
        let val = this.getStorge();
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}