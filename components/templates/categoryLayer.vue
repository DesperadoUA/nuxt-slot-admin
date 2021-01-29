<template>
  <v-container>
    <v-card>
      <v-toolbar
              flat
              color="deep-orange darken-2"
              dark
      >
        <v-toolbar-title class="font-podkova-bold">{{commonData.title}}</v-toolbar-title>
      </v-toolbar>
      <v-tabs color="deep-orange darken-2" vertical>
        <v-tab  class="font-podkova-bold" v-for="item in commonData.post_type" :key="item.post_type">
          <v-icon left>
            {{item.icon}}
          </v-icon>
          {{item.name}}
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-row class="deep-orange darken-2 font-weight-bold ma-2">
                <v-col class="col-1 font-weight-bold">
                  <v-icon left>
                    mdi-checkbox-marked
                  </v-icon>
                  id
                </v-col>
                <v-col class="col-8 font-weight-bold">
                  <v-icon left >
                    mdi-message-text
                  </v-icon>
                  Title
                </v-col>
                <v-col class="col-3 text-right">
                  <v-icon left class="font-weight-bold">
                    mdi-tooltip-edit
                  </v-icon>
                  Edit
                </v-col>
              </v-row>
              <v-row
                      v-for="item in  category.casino"
                      :key="item.id"
                      class="blue-grey align-center darken-4 ma-2 font-weight-bold"
              >
                <v-col class="col-1 font-weight-bold">
                  {{item.id}}
                </v-col>
                <v-col class="col-8 font-weight-bold subtitle-1">
                  {{item.category_name}}
                </v-col>
                <v-col class="col-3 text-right">
                  <v-menu
                          transition="slide-y-transition"
                          bottom
                          class="d-block"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                              class="deep-orange darken-2 justify-start display_block font-podkova-bold"
                              dark
                              v-bind="attrs"
                              v-on="on"
                      >
                        <v-icon left>mdi-tooltip-edit</v-icon>
                        Change
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                              class="font-podkova-bold pointer"
                      >
                        <v-list-item-title @click="onEdit(item)">
                          <v-icon left>mdi-tooltip-edit</v-icon>
                          Edit
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item
                              class="font-podkova-bold pointer"
                      >
                        <v-list-item-title @click="onDelete(item)">
                          <v-icon left>mdi-delete</v-icon>
                          Delete
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                          class="deep-orange darken-2 font-weight-bold ml-1"
                          @click="onAddCategory('casino')"
                  >
                    <v-icon left>mdi-playlist-plus</v-icon>
                    ADD
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-dialog
            v-model="dialog"
            width="500"
    >
      <v-card>
        <v-card-title class="headline font-podkova-bold deep-orange darken-2">
          Delete Category
        </v-card-title>

        <v-card-text>
          <p class="headline  font-weight-bold mt-5">
            {{deleteItem.category_name}} will be delete!!!!
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  class="deep-orange darken-2 font-podkova-bold"
                  text
                  @click="onAcceptDelete"
          >
            Accept
          </v-btn>
          <v-btn
                  class="error font-podkova-bold"
                  text
                  @click="onCancel"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
            v-model="addDialog"
            width="500"
    >
      <v-card>
        <v-card-title class="headline font-podkova-bold deep-orange darken-2">
          Add Category
        </v-card-title>

        <v-card-text class="color-white">
          <v-text-field
                  prepend-icon="mdi-tooltip-edit font-podkova-bold "
                  loading
                  color="deep-orange"
                  v-model="categoryTitle"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  class="font-podkova-bold deep-orange darken-2"
                  text
                  @click="onAcceptAdd"
          >
            Add
          </v-btn>
          <v-btn
                  class="error font-podkova-bold"
                  text
                  @click="onCancelAdd"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
            v-model="editDialog"
            width="500"
    >
      <v-card>
        <v-card-title class="headline font-podkova-bold deep-orange darken-2">
          Edit Category
        </v-card-title>

        <v-card-text>
          <v-text-field
                  prepend-icon="mdi-tooltip-edit"
                  type="text"
                  loading
                  color="deep-orange"
                  v-model="editTitle"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  class="font-podkova-bold deep-orange darken-2"
                  text
                  @click="onAcceptEdit"
          >
            Accept
          </v-btn>
          <v-btn
                  class="error font-podkova-bold"
                  text
                  @click="onCancelEdit"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
    export default {
        name: "categoryLayer",
        props: ['commonData', 'category', 'lang'],
        data() {
            return {
                dialog: false,
                addPostType: '',
                addDialog: false,
                editDialog: false,
                editTitle: '',
                editId: '',
                categoryTitle: '',
                deleteItem: {
                    id: '',
                    category_name: ''
                }
            }
        },
        methods: {
            onDelete(item) {
                this.deleteItem = item
                this.dialog = true
            },
            onEdit(item){
                this.editDialog = true
                this.editTitle = item.category_name
                this.editId = item.id
            },
            onAddCategory(post_type) {
                this.addDialog = true
                this.addPostType = post_type
            },
            async onAcceptDelete(){
                const candidate = this.deleteItem
                const user = this.$store.getters['user/getUser']
                const session = user.session
                const data = {
                    session,
                    id: candidate.id,
                    action: 'delete'
                }
                await this.$store.dispatch('category/deleteCategory', data)
                this.dialog = false
            },
            async onAcceptAdd(){
                const candidate = this.categoryTitle.trim()
                if(candidate !== '') {
                    const user = this.$store.getters['user/getUser']
                    const session = user.session
                    const data = {
                        session,
                        categoryName: candidate,
                        lang: this.lang,
                        post_type: this.addPostType,
                        action: 'add'
                    }
                    await this.$store.dispatch('category/addCategory', data)
                    this.categoryTitle = ''
                    this.addDialog = false
                }
            },
            async onAcceptEdit(){
                const candidate = this.editTitle
                if(candidate !== '') {
                    const user = this.$store.getters['user/getUser']
                    const session = user.session
                    const data = {
                        session,
                        id: this.editId,
                        category_name: candidate,
                        action: 'update'
                    }
                    await this.$store.dispatch('category/updateCategory', data)
                    this.editDialog = false
                }
            },
            onCancelEdit(){
                this.editDialog = false
            },
            onCancel(){
                this.dialog = false
            },
            onCancelAdd(){
                this.addDialog = false
                this.categoryTitle = ''
            }
        },
    }
</script>

<style scoped>

</style>