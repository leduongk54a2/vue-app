<script lang="jsx" setup>
import { useStore } from "vuex";
import { computed, h, onMounted, ref, watch } from "vue";
import { Button, Checkbox } from "ant-design-vue";
import { DELETE_CATEGORY, GET_ALL_CATEGORY } from "@/store/modules/category/actions-type";
import { LoadingOutlined } from "@ant-design/icons-vue";
import AddCategoryModal from "@/views/CategoryManagement/AddCategoryModal.vue";

const columns = [
  {
    width: "3%",
    title: "ID",
    customRender: ({ record }) => <div>{record.categoryId}</div>,
  },
  {
    width: "10%",
    title: "Tên Category",
    customRender: ({ record }) =>
      h("div", {
        innerHTML: record.categoryName,
      }),
  },
  {
    width: "50%",
    title: "Mô tả",
    customRender: ({ record }) =>
      h("div", {
        innerHTML: record.textDescription,
      }),
  },
  {
    width: "10%",
    title: "Ẩn",
    customRender: ({record}) => {
      return <Checkbox checked={!record.visible} />;
    },
    shouldCellUpdate: () => {
      return true;
    },
  },
  {
    width: "10%",
    title: "Sửa",
    customRender: () => {
      return <Button>Sửa</Button>;
    },
  },
  {
    width: "10%",
    title: "Xóa",
    customRender: ({record}) => {
      return <Button onClick={()=>deleteCategory([record.categoryId])}>Xóa</Button>;
    },
  },
];

const indicator = <LoadingOutlined />;
const store = useStore();
const visibleAdd = ref(false);

onMounted(() => {
  store.dispatch(GET_ALL_CATEGORY);
});

const listCategory = computed(() => store.getters.listCategory);
const loading = computed(() => store.getters.loading);

watch(visibleAdd, () => {
  console.log(visibleAdd.value);
});

const deleteCategory = (ids) => {
  store.dispatch(DELETE_CATEGORY,ids).then((res) => {
    if(res.statusCode === 200 ) {
      store.dispatch(GET_ALL_CATEGORY);
    }
  })
}
</script>

<template>
  <div>
    <a-spin :indicator="indicator" :spinning="loading">
      <a-button class="add-btn" @click="() => (visibleAdd = true)"
        >Thêm
      </a-button>
      <a-table :columns="columns" :data-source="listCategory"></a-table>
      <add-category-modal v-model:visible="visibleAdd"/>
    </a-spin>
  </div>
</template>

<style scoped>
.add-btn {
  display: flex;
  margin-bottom: 10px;
}
</style>
