


export const ProjectHeadline = ({ repo }) => {

    let projectTitle = repo.name;

    // my project titles are written like project-react-portfolio. In order for them to look like Project - react portfolio, I added this function:
  
    const replaceHyphensWithSpacesExceptFirst = (text) => {
        const parts = text.split('-'); // Split by the first hyphen
        const firstPart = parts[0];
        const secondPart = parts.slice(1).join('-').replace(/-/g, ' '); // Replace hyphens with spaces in the second part
        return `${firstPart} - ${secondPart}`;
      };

    return (
        <>
            <h2 className="project-title">{replaceHyphensWithSpacesExceptFirst(projectTitle.charAt(0).toUpperCase()+projectTitle.slice(1))}</h2>
        </>
    )
}
