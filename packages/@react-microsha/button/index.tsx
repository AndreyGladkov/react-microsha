import { FC, PropsWithChildren } from 'react';

const Button: FC<PropsWithChildren> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

export default Button;
