describe("userDetails", () => {
   beforeEach(angular.mock.module("myApp"));

   let $componentController;
   beforeEach(inject(function (_$componentController_) {
      $componentController = _$componentController_;
   }));

   it("should set user id", () => {
      const locals = {
         $stateParams: {
            userId: 1
         }
      };

      const ctrl = $componentController("userDetail", locals);

      expect(ctrl.id).toBe(1);
   });
});
