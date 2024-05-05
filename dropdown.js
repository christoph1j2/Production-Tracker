function dropdown(checklistContainerId){
    const header = document.querySelector(`#${checklistContainerId} #hdr`);
    const container = document.querySelector(`#${checklistContainerId} #content`);
    const arrow = document.querySelector(`#${checklistContainerId} #hdr i`)

    let count = 0;

    header.addEventListener("click", () => {
        count++;
        switch (count%2) {
            case 0:
                container.style.display = 'none';
                arrow.innerHTML = '&darr;';
                break;
            case 1:
                container.style.display = 'block';
                arrow.innerHTML = '&uarr;';
                break;
            default:
                console.error("du bist deppert")
                break;
        }
    })
}