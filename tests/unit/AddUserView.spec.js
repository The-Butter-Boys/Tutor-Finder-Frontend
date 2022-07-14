import AddUserView from "@/views/AddUserView.vue";
import {shallowMount} from "@vue/test-utils";

describe("AddUserView.vue", ()=> {
  it("is returned", async () => {
    const mockMethod = jest.spyOn(AddUserView.methods, 'submitClicked');
    await shallowMount(AddUserView).find('button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

})
