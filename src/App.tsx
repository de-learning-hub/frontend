import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Catalog } from '@/pages/Catalog';
import { Roadmaps } from '@/pages/Roadmaps';
import { Interview } from '@/pages/Interview';
import { About } from '@/pages/About';
import { theme } from '@/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
