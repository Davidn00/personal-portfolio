import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout';

import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path="/404" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
