<script setup>
import { ADD_CATEGORY, GET_ALL_CATEGORY } from "@/store/modules/category/actions-type";
import { computed, defineEmits, defineProps, ref, toRef, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  visible: {},
});

const emits = defineEmits(["update:visible"]);

const submit = ref(false)
const categoryName = ref("")
const textDescription = ref("")
const visible =  ref(false)

const localVisible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits("update:visible",value)
  }
})
watch(()=> {return {categoryName: categoryName.value,textDescription: textDescription.value,visible:visible.value}},(value)=> {
  console.log("check",value)
},  { deep: true })

const resetValue = () => {
    categoryName.value = ""
    textDescription.value = ""
    visible.value =  false
}

const submitForm= () => {
  submit.value = true
  store.dispatch(ADD_CATEGORY,{
    categoryName : categoryName.value,
    textDescription : textDescription.value,
    visible :  visible.value,
  });

  emits("update:visible",false)
}

watch(()=> props.visible, (value) => {
  if(!value && submit.value){
    store.dispatch(GET_ALL_CATEGORY);
    submit.value = false
  }
})

</script>



<template>
  <a-modal title="Add category" v-model:open="localVisible" :after-close="resetValue" @ok="submitForm">
    <div>Category Name :</div>
    <a-input v-model:value="categoryName"></a-input>
    <div>Text Description :</div>
    <a-input v-model:value="textDescription"></a-input>
    <div>Visible: </div>
    <a-checkbox v-model:checked="visible"></a-checkbox>
  </a-modal>
</template>

<style scoped></style>
