import AddTaskForm from './components/AddTaskForm';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    // Používáme světlé téma pro lepší kontrast Kanban nástěnky
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">TaskFlow</h1>
        <AddTaskForm />
        <div className="mt-10">
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
}

export default App;