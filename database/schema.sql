set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."guestId" (
	"guestId" serial NOT NULL,
	CONSTRAINT "guestId_pk" PRIMARY KEY ("guestId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."saveTheDate" (
	"guestId" int NOT NULL UNIQUE,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."rsvp" (
	"guestId" int NOT NULL UNIQUE,
	"response" BOOLEAN NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."guestList" (
	"guestId" int NOT NULL,
	"attending" BOOLEAN NOT NULL,
	"meal" TEXT NOT NULL,
	"wordsOfWisdom" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "saveTheDate" ADD CONSTRAINT "saveTheDate_fk0" FOREIGN KEY ("guestId") REFERENCES "guestId"("guestId");

ALTER TABLE "rsvp" ADD CONSTRAINT "rsvp_fk0" FOREIGN KEY ("guestId") REFERENCES "saveTheDate"("guestId");

ALTER TABLE "guestList" ADD CONSTRAINT "guestList_fk0" FOREIGN KEY ("guestId") REFERENCES "rsvp"("guestId");
