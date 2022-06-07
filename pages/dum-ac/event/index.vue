<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Event List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/event/create" class="btn-add"
                    >Add Event</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <!-- <th>Slug</th> -->
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in events" :key="event._id">
                    <td>{{ event.id }}</td>
                    <td>{{ event.title }}</td>
                    <td>{{ event.description }}</td>
                    <!-- <td>{{ event.slug }}</td> -->
                    <td>
                      <button
                        v-if="event.status == 1"
                        class="btn-active"
                        @click="eventStatus(event.id, event.status)"
                      >
                        Active
                      </button>
                      <button
                        v-if="event.status == 0"
                        class="btn-inactive"
                        @click="eventStatus(event.id, event.status)"
                      >
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="eventEdit(event.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="eventDelete(event.id)">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="eventUpdate"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Event Update
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="" class="">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Title"
                  v-model="event.title"
                />
                <p
                  v-if="errors.title"
                  v-text="errors.title[0]"
                  class="text-danger"
                ></p>
              </div>
              <div class="form-group">
                <label for="" class="">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Description"
                  v-model="event.description"
                />
                <p
                  v-if="errors.description"
                  v-text="errors.description[0]"
                  class="text-danger"
                ></p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-submit"
                @click="eventUpdate()"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Dum-content",
  mounted() {
    this.getEvent();
  },
  data() {
    return {
      events: [],
      event: {
        id: "",
        title: "",
        description: "",
      },
      errors: {},
    };
  },
  methods: {
    getEvent() {
      this.$axios
        .$get("/event/show")
        .then((res) => {
          this.events = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    eventEdit(id) {
      $("#eventUpdate").modal("show");
      this.$axios
        .$get("/event/edit/" + id)
        .then((res) => {
          this.event = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    eventUpdate() {
      this.$axios
        .$post("/event/update/" + this.event.id, this.event)
        .then((res) => {
          this.getEvent();
          $("#eventUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    eventDelete(id) {
      if (confirm("Are you sure to delete this event?")) {
        this.$axios
          .$get("/event/delete/" + id)
          .then((res) => {
            this.getEvent();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    eventStatus(id, status) {
      this.$axios
        .$get("/event/status/" + id + "/" + status)
        .then((res) => {
          this.getEvent();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>
