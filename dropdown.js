function dropdown(checklistContainerId){
    const header = document.querySelector(`#${checklistContainerId} #hdr`);
    const container = document.querySelector(`#${checklistContainerId} #content`);
    let count = 0;

    header.addEventListener("click", () => {
        count++;
        switch (count%2) {
            case 0:
                container.style.display = 'none';
                break;
            case 1:
                container.style.display = 'block';
                break;
            default:
                console.error("jsi pica")
                break;
        }
    })
}