import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const createUser = async () => {
    const user = await prisma.users.create({
        data: { email: "test@test.com", name: "test" },
    });
};
createUser()
    .then(() => {
    console.log("User created");
})
    .catch((err) => {
    console.error(err);
})
    .finally(() => {
    prisma.$disconnect();
});
//# sourceMappingURL=create-user.js.map