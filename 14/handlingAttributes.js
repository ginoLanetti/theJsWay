//Handling attributes

const linkInfo = () => {
    const linksList = document.getElementsByTagName("li");
    if (linksList.length === 0) {
        console.error('There are no links in the document')
    } else {

        console.log(linksList.length);
        console.log(linksList[0]);
        console.log(linksList[linksList.length - 1]);
    }

}