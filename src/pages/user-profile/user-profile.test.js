describe("userProfile", () => {
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

      const ctrl = $componentController("userProfile", locals);

      expect(ctrl.id).toBe(1);
   });
});
