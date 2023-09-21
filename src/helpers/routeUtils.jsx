import React from 'react';
import AuthMiddleware from '../middleware/AuthMiddleware';


export const createRoute = (path, element, pageName, privateRoute = true, layout, skeleton, type = 'private') => ({
  path,
  element: (
    <AuthMiddleware
      path={path}
      pageName={pageName}
      privateRoute={privateRoute}
      component={element}
      layout={layout}
      skeleton={skeleton}
      type={type}
    />
  ),
});
