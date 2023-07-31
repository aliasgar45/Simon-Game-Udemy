import { ComponentType, LazyExoticComponent, Suspense } from 'react';
import Loader from '../../../../shared/components/molecules/loader';
import { LOADING } from '../../../../shared/constants';
import ProtectedPlaceholder from '../protected';

const ProtectedRoute = ({
  component: LazyComponent,
  hasAccess
}: {
  component: LazyExoticComponent<ComponentType<any>>;
  hasAccess: boolean;
}) => {
  if (hasAccess) {
    return (
      <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
        <LazyComponent />
      </Suspense>
    );
  }

  return <ProtectedPlaceholder />;
};

export default function getRoutesV1() {
  const routes: Array<JSX.Element> = [];

  return routes;
}
