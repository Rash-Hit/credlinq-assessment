-- CreateTable
CREATE TABLE "SME" (
    "id" SERIAL NOT NULL,
    "UEN" VARCHAR(9) NOT NULL,
    "CompanyName" VARCHAR(255) NOT NULL,
    "FullName" VARCHAR(255) NOT NULL,
    "PositionInCompany" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "MobNumber" VARCHAR(11) NOT NULL,
    "Documents" TEXT[],

    CONSTRAINT "SME_pkey" PRIMARY KEY ("id")
);
