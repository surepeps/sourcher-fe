import React from 'react';

function HtmlRender({ htmlString }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default HtmlRender;
