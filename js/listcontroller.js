let linkdata = [
    {
        "domain": "aka.ms",
        "key": "login",
        "pinned": false,
        "last_visited": 1737599479,
        "visit_count": 10
    },
    {
        "domain": "aka.ms",
        "key": "recoverykey",
        "pinned": false,
        "last_visited": 1737599401,
        "visit_count": 11
    },
];

function generate_pinned_list(linkdata) {
    const items = linkdata.filter((obj) => obj.pinned);
    items.sort((o1, o2) => o2.visit_count - o1.visit_count);

    return render_list(items);
}

function generate_unpinned_list(linkdata) {
    const items = linkdata.filter((obj) => !obj.pinned);
    items.sort((o1, o2) => o2.last_visited - o1.last_visited);

    return render_list(items);
}


/*
<ul class="mdc-list">
  <li class="mdc-list-item" tabindex="0">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">Single-line item</span>
  </li>
</ul>
*/
function render_list(items){
    let list = document.createElement("ul");
    list.classList.add("mdc-list");
    for(const it of items) {
        const url = `${it.domain}/${it.key}`;
        console.log(url);

        const listitem = document.createElement("li");
        listitem.classList.add("mdc-list-item");

        const ripple = document.createElement("span");
        ripple.classList.add("mdc-list-item__ripple");
        listitem.appendChild(ripple);

        const label = document.createElement("span");
        label.classList.add("mdc-list-item__text");
        label.innerText = url;
        listitem.appendChild(label);

        list.appendChild(listitem);
    }
    return list;
}

function render_page() {
    const pinned = generate_pinned_list(linkdata);
    const unpinned = generate_unpinned_list(linkdata);
    const body = document.getElementById("mainui");
    body.innerText = "";

    body.appendChild(pinned);
    body.appendChild(unpinned);
}

window.onload = render_page()