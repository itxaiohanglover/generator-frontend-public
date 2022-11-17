import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const codegen: AppRouteModule = {
  path: '/codegen',
  name: 'Codegen',
  component: LAYOUT,
  redirect: '/codegen/sqltable',
  meta: {
    orderNo: 1,
    icon: 'ion:layers-outline',
    title: t('routes.codegen.codegen'),
  },
  children: [
    {
      path: 'sqltable',
      name: 'sqltable',
      meta: {
        title: t('routes.codegen.sqltable')
      },
      component: () => import('/@/views/codegen/Basic.vue'),
    }
  ],
};
export default codegen;
