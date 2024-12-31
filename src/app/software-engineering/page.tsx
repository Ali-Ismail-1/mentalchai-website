// src/app/software-engineering/page.tsx
import ProjectsSection from "../components/ProjectsSection";

export default function EngineeringPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Software Engineering</h1>
            <p>
                Welcome to my Software Engineering page! <br /><br />
                I&apos;m Ali, a software engineer passionate about building scalable, modular solutions that solve real-world problems. <br />
                This is where I share interesting projects, technical guides, and actionable insights to help you sharpen your skills and succeed in the field of engineering.
            </p>
            <hr className="my-6" />
            <ProjectsSection />
        </div>
    );
}
