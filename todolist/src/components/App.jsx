import { useState } from "react";
import NewProject from "./NewProject.jsx";
import Sidebar from "./Sidebar";
import NoProjectSelect from "./NoProjectSelected.jsx";
import SelectedProject from "./SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const addTask = {
        task: task,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, addTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevTasks) => {
      return {
        ...prevTasks,
        tasks: prevTasks.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: undefined,
        projects: prevProjects.projects.filter(
          (project) => project.id !== prevProjects.selectedProjectId
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const updateProjects = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, updateProjects],
      };
    });
  }

  let selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelect onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
