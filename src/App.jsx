import React from 'react';
//import Header from './components/utils/Header'
import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import AuthLayout from '@layouts/AuthLayout';
import SimpleLayout from '@layouts/SimpleLayout';
import routes from '@routes/routes';
import MypageLayout from './layouts/MypageLayout';

function App() {
  // 레이아웃 컴포넌트 매핑
  const layoutComponents = {
    main: MainLayout,
    auth: AuthLayout,
    simple: SimpleLayout,
    mypage: MypageLayout,
  };

  // 라우트 렌더링 함수
  const renderRoutes = (routeList) => {
    return routeList.map(({ path, element, index, children, layout, layoutProps }, routeIndex) => {
      let routeElement = element;
      if (layout && layoutComponents[layout]) {
        const LayoutComponent = layoutComponents[layout];
        routeElement = <LayoutComponent {...(layoutProps || {})}>{element}</LayoutComponent>;
      }
      return (
        <Route key={routeIndex} path={path} element={routeElement} index={index}>
          {children && renderRoutes(children)}
        </Route>
      );
    });
  };

  return (
    <>
      <Routes>{renderRoutes(routes)}</Routes>
    </>
  );
}

export default App;
