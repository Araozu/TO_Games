export default class HTMLElementGetter {

    getElementPromise(id: string): Promise<HTMLElement> {
        return new Promise<HTMLElement>(resolve => {
            const interval = setInterval(() => {
                const tempElement = document.getElementById(id);
                if (tempElement) {
                    clearInterval(interval);
                    resolve(tempElement);
                }
            }, 100);
        });
    }

}