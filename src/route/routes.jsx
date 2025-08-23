// import MainLayout from '@layouts/MainLayout';
import React from 'react';
import Home from '@pages/Home';
import Community from '@pages/community/CommunityPages';
import LoginPage from '@pages/users/LoginPage';
import RegisterPage from '@pages/users/RegisterPage';
import MyPage from '@pages/users/MyPage';
import ProductsPage from '@pages/products/ProductsPage';
import SellerPage from '@pages/seller/SellerPage';
import AddProductsPage from '@pages/products/AddProductsPage';

// 프로젝트 라우터 핸들링 페이지
const routes = [
  {
    // 메인 페이지
    path: '/',
    children: [
      { index: true, element: <Home />, layout: 'main' },
      { path: 'community', element: <Community />, layout: 'main' },
      {
        path: 'mypage',
        element: <MyPage />,
        layout: 'mypage',
        // layoutProps: {
        //   title: '유저이름넣기',
        //   onButtonClick: () => alert('버튼 클릭!'),
        //   isRightButtonVisible: false,
        // },
        // children: [
        //   { path: 'edit', element: <div>마이페이지 수정</div> }
        // ]
      },
      {
        path: 'seller',
        element: <SellerPage />,
        layout: 'mypage',
        // layout: 'simple',
        // layoutProps: {
        //   onButtonClick: () => alert('셀러 버튼 클릭!'),
        //   isRightButtonVisible: true,
        //   buttonText: '셀러 관리',
        //   isRightButtonActive: true,
        //   title: '판매자 페이지',
        //   buttonText: '저장',
        // },
        // children: [
        //   { path: 'mypage', element: <div>셀러 마이페이지</div> },
        //   { path: 'market', element: <div>셀러 판매물품 확인</div> }
        // ]
      },
      {
        path: 'products',
        element: <ProductsPage />,
        layout: 'main', // 커머스 페이지는 MainLayout 사용
        children: [
          { path: 'add', element: <AddProductsPage />, layout: 'main' },
          // { path: 'detail/:id', element: <ProductsPage /> }
        ],
      },
      { path: 'register', element: <RegisterPage />, layout: 'auth' },
      { path: 'login', element: <LoginPage />, layout: 'auth' },
    ],
  },
];

export default routes;
