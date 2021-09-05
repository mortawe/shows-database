import {createBack, createRef} from "../../utils/back.js";
import {TableComponent} from "../../components/Table/Table.js";
import {application} from "../../main.js";

export function tablePage(type, data) {
    application.innerHTML = '';
    const section = document.createElement('section');
    section.dataset.sectionName = type.name;

    const header = document.createElement('h1');
    header.textContent = type.header;
    section.appendChild(header);
    const back = createBack();
    section.appendChild(back);

    const tableNode = document.createElement('table');

    if (data) {
        const table = new TableComponent({
            tmplName: type.tmplName,
            parent: tableNode,
            data: data,
        });
        table.render();
        section.appendChild(tableNode);
    } else {
        const em = document.createElement('em');
        em.textContent = 'Loading...';
        section.appendChild(em);

        HttpModule.post(type.request);
    }

    const ref = createRef('Create', `${type.name}/create`, `${type.name}/create`)


    section.appendChild(ref);
    application.appendChild(section);
}