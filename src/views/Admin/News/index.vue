<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
        <h1 class="text-xl font-semibold">Новости</h1>
        <p class="bg-mainColor text-white px-5 py-2 rounded-md cursor-pointer" @click="modalState = true">Добавить
          новость</p>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getNews"
            :columns="columns"
            :numbered="true"
            :pagination="getNews.meta"
            :source="getNews"
            @call_to_refresh="news()"
        >
          <template #default="{ row, column }">
            <template v-if="column.name === 'Картинка'">
              <img v-if="row.img" :src="row.img" class="w-10 h-10 rounded-md object-cover"/>
              <p v-else class="text-red-500">Нет данных</p>
            </template>
            <template v-if="column.name === 'Действия'">
              <div class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-secondaryColor"
                    @click="editNews(row)"
                >
                  <font-awesome-icon
                      :icon="['fas', 'pen-to-square']"
                      class="w-6"
                  />
                </div>
                <div
                    class="flex items-center cursor-pointer text-red-500"
                    @click="removeNews(row.id)"
                >
                  <font-awesome-icon :icon="['fas', 'trash']" class="w-6"/>
                </div>
              </div>

            </template>
          </template>
        </TableComponent>
      </div>
    </div>
  </div>
  <Modal
      :is-visible="modalState"
      component-name="CreateNews"
      @close_modal="(val) => (modalState = val)"
  />
  <Modal
      :is-visible="modalStateEdit"
      :rec-id="editData"
      component-name="EditNews"
      @close_modal="(val) => (modalStateEdit = val)"
  />
  <Modal
      :is-visible="modalStateRemove"
      :rec-id="removeData"
      component-name="RemoveNews"
      @close_modal="(val) => (modalStateRemove = val)"
  />
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal.vue";
import {useMeta} from "vue-meta";

export default {
  name: "AdminNews",
  setup() {
    useMeta({title: "Новости"});
  },
  data() {
    return {
      modalState: false,
      modalStateEdit: false,
      modalStateRemove: false,
      editData: null,
      removeData: null,
      columns: [
        {name: "Название", fname: "title"},
        {name: "Картинка", fname: "img"},
        {name: "Описание", fname: "description"},
        {name: "Просмотры", fname: "views"},
        {name: "Дата создания", fname: "created_at"},
        {name: "Действия", fname: "actions"},
      ],
    }
  },
  computed: {
    ...mapGetters(['getNews'])
  },
  components: {Modal, TableComponent},
  mounted() {
    this.news();
  },
  methods: {
    ...mapActions(['news']),
    removeNews(id) {
      this.modalStateRemove = true;
      this.removeData = id;
    },
    editNews(id) {
      this.editData = id;
      this.modalStateEdit = true;
    },
  }
}
</script>