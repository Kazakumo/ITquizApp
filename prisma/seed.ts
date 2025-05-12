// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { githubId: "dummy_github" },
    update: {},
    create: {
      githubId: "dummy_github",
      name: "ダミーユーザー",
      email: "dummy@example.com",
    },
  });

  const category = await prisma.category.upsert({
    where: { name: "ネットワーク" },
    update: {},
    create: {
      name: "ネットワーク",
    },
  });

  await prisma.term.create({
    data: {
      name: "DNS",
      description: "ドメイン名をIPアドレスに変換する仕組み。",
      authorId: user.id,
      categoryId: category.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
