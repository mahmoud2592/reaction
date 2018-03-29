import getFakeMongoCursor from "/imports/test-utils/helpers/getFakeMongoCursor";

export default {
  shopAdministrators() {
    return Promise.resolve(getFakeMongoCursor("Accounts", [
      { _id: "a1", name: "Owner" },
      { _id: "b2", name: "Admin 1" },
      { _id: "c3", name: "Admin 2" }
    ]));
  },
  shopById(context, _id) {
    return {
      _id
    };
  },
  userAccount(context, _id) {
    return {
      _id,
      profile: {
        addressBook: [
          {
            _id: "ab55",
            address1: "Address 1",
            address2: "Address 2",
            city: "New York City",
            country: "United States",
            failedValidation: false,
            fullName: "Full Name",
            isBillingDefault: false,
            isCommercial: false,
            isShippingDefault: false,
            phone: "+15555555555",
            postal: "12345",
            region: "NY"
          }
        ],
        currency: "USD"
      },
      name: "Fake Person"
    };
  },
  group(context, _id) {
    return {
      _id: "bc456",
      createdAt: new Date(),
      createdBy: "acc123",
      description: "",
      name: "shop_managers",
      permissions: ["owner", "admin", "createProduct"],
      shopId: "abc123",
      slug: "shop-managers",
      updatedAt: new Date()
    };
  },
  groups(context, shopId) {
    return Promise.resolve(getFakeMongoCursor("Groups", [
      {
        _id: "bc456",
        createdAt: new Date(),
        createdBy: "acc123",
        description: "",
        name: "shop_managers",
        permissions: ["owner", "admin", "createProduct"],
        shopId: "abc123",
        slug: "shop-managers",
        updatedAt: new Date()
      },
      {
        _id: "gh678",
        createdAt: new Date(),
        createdBy: "acc123",
        description: "",
        name: "special_customers",
        permissions: ["createProduct"],
        shopId: "abc123",
        slug: "special-customers",
        updatedAt: new Date()
      },
      {
        _id: "db7986",
        createdAt: new Date(),
        createdBy: "acc123",
        description: "",
        name: "brands",
        permissions: ["owner", "admin", "createProduct"],
        shopId: "bcfgghj6768",
        slug: "brands",
        updatedAt: new Date()
      }
    ]));
  },
  roles(context, shopId) {
    return Promise.resolve(getFakeMongoCursor("roles", [
      {
        "name": "reaction-shipping"
      },
      {
        "name": "reaction-stripe/stripeConnectAuthorize"
      },
      {
        "name": "reaction-payments"
      },
      {
        "name": "shipping/flatRates"
      },
      {
        "name": "discount-codes/customDiscountCodes"
      },
      {
        "name": "reaction-auth-net/authnetSettings"
      },
      {
        "name": "reaction-social/socialSettings"
      },
      {
        "name": "reaction-i18n"
      },
      {
        "name": "dashboardPackages"
      },
      {
        "name": "dashboard/shippo"
      }
    ]));
  }
};