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

ActiveRecord::Schema.define(version: 20181204192825) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "firms", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "investor_target_notes", force: :cascade do |t|
    t.text "body"
    t.bigint "investor_target_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["investor_target_id"], name: "index_investor_target_notes_on_investor_target_id"
  end

  create_table "investor_targets", force: :cascade do |t|
    t.bigint "investor_id"
    t.integer "fundraising_stage"
    t.datetime "next_follow_up_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["investor_id"], name: "index_investor_targets_on_investor_id"
  end

  create_table "investors", force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "firm_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["firm_id"], name: "index_investors_on_firm_id"
    t.index ["person_id"], name: "index_investors_on_person_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.string "signal_profile_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "investor_target_notes", "investor_targets"
  add_foreign_key "investor_targets", "investors"
  add_foreign_key "investors", "firms"
  add_foreign_key "investors", "people"
end
