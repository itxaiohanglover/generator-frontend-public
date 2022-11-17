<template>
  <div class="p-4">
    <BasicTable
      title="基础示例"
      :columns="columns"
      :dataSource="data"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      showTableSetting
      :pagination="pagination"
      @columns-change="handleColumnChange"
    >
      <template #toolbar>
        <a-button type="primary" @click="toggleCanResize">
          {{ !canResize ? '自适应高度' : '取消自适应' }}
        </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BasicTable, ColumnChangeParam } from '/@/components/Table';
import { getBasicColumns, getBasicData } from './tableData';

export default defineComponent({
  components: { BasicTable },
  setup() {
    const canResize = ref(false);
    const loading = ref(false);
    const striped = ref(true);
    const border = ref(true);
    const pagination = ref<any>(false);
    function toggleCanResize() {
      canResize.value = !canResize.value;
    }

    function handleColumnChange(data: ColumnChangeParam[]) {
      console.log('ColumnChanged', data);
    }
    return {
      columns: getBasicColumns(),
      data: getBasicData(),
      canResize,
      loading,
      striped,
      border,
      toggleCanResize,
      pagination,
      handleColumnChange,
    };
  },
});
</script>
