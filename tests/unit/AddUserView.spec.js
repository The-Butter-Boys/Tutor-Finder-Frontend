import AddUserView from "@/src/views/AddUserView.vue";
import {shallowMount} from "@vue/test-utils";

describe("AddUserView.vue", ()=> {
  it("is returned", async () => {
    const mockMethod = jest.spyOn(AddUsersView.methods, 'submitClicked');
    await shallowMount(ShowUsersView).find('button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

})
