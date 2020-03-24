// key is tab id and value is meta data of tab
const tabs = {
    "1": {
        name: "tab1",
    },
    "2": {
        name: "tab2",
    },
    "3": {
        name: "tab3",
    },
    "4": {
        name: "tab4",
    },
    "5": {
        name: "tab5",
    },
    "6": {
        name: "tab6",
    }
}

// key is id of the primary tab and value is the secondary tab
const tabsConfiguration = {
    "1": ["2", "3"],
    "4": ["5"],
    "6": [],
}

const onPrimaryTabHover = (primaryTab) => {
    document.getElementById(primaryTab+"secondary").classList.add("showSecondaryTab");
}

const onPrimaryTabMouseOut = (primaryTab) => {
    document.getElementById(primaryTab+"secondary").classList.remove("showSecondaryTab");
}

const createNavigationBar = () => {
    const tabsHtml = [];
    // Primary tabs
    tabsHtml.push("<ul class=navigationList>")
    Object.keys(tabsConfiguration).forEach(primaryTab => {
        tabsHtml.push("<li class=primaryTab id=" + primaryTab +
        " onmouseover=onPrimaryTabHover("+primaryTab+") onmouseout=onPrimaryTabMouseOut("+primaryTab+")>" + tabs[primaryTab].name);
        tabsHtml.push("<ul class=secondaryTab id="+primaryTab+"secondary>");
        tabsConfiguration[primaryTab].forEach(secondaryTab => {
            tabsHtml.push("<li id=" + secondaryTab + ">" + tabs[secondaryTab].name + "</li>");
        });
        tabsHtml.push("</ul>");
        tabsHtml.push("</li>");
    });
    tabsHtml.push("</ul>")
    return tabsHtml;
};

document.getElementById("navigationBar").innerHTML = createNavigationBar().join("");

