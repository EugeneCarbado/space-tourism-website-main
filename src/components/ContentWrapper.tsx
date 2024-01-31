import {ReactElement, ReactNode} from 'react';

interface IContentWrapper {
  children: ReactNode;
  className?: string;
}

function ContentWrapper({children, className}: IContentWrapper): ReactElement {
  return <div className={`${className} content-grid`}>{children}</div>;
}

export default ContentWrapper;
