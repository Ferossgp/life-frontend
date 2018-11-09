/**
 * Asynchronously loads the component for LifeExpectancy
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
