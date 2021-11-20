<template>
  <div class="pagination">
    <v-pagination
      v-model="page"
      :length="length"
      :total-visible="5"
      @input="paginate"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  name: "blog-pagination",
  props: {
    align: { type: String, default: "center" },
    items: Array,
    itemsPerPage: { type: Number, default: 3 },
  },
  data() {
    return {
      page: 1,
      length: Math.ceil(this.items.length / this.itemsPerPage),
    };
  },
  computed: {
    sliceItems() {
      return (page) =>
        this.items.slice(
          (page - 1) * this.itemsPerPage,
          page * this.itemsPerPage
        );
    },
  },
  methods: {
    paginate(pageNum) {
      if (pageNum < 1) pageNum = 1;
      if (pageNum > this.length) pageNum = this.length;

      const items = this.sliceItems(pageNum);

      this.$emit("paginate", items);
    },
  },
};
</script>
