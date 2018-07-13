# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180708015350) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notebooks", force: :cascade do |t|
    t.string   "name"
    t.string   "edition"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "company_id"
    t.integer  "release_year"
  end

  create_table "trades", force: :cascade do |t|
    t.string   "status",      default: "proposed"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.integer  "proposer_id"
    t.integer  "acceptor_id"
  end

  create_table "user_notebooks", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "notebook_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "trade_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "city"
    t.string   "password_digest"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "admin?",          default: false
  end

end
