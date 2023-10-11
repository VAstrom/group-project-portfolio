import { ProjectCard } from "../components/ProjectCard";

export const Section = ({ repos }) => {
    return (
        <section>
            {repos.map((repo) => (
                <div key={repo.id}>
                    <ProjectCard repo={repo} />
                </div>
            ))}
        </section>
    );
}



