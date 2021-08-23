import { Containers, Title } from './Container.styles';
import { FaBookOpen } from 'react-icons/fa';

const Container = ({ title, children }) => (
    <Containers>
        <Title><FaBookOpen /> {title}</Title>
        {children}
    </Containers>
);
export default Container;
