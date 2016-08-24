# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 201606160525010) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "access_tokens", force: :cascade do |t|
    t.string   "token"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "access_tokens", ["user_id"], name: "index_access_tokens_on_user_id", using: :btree

  create_table "advertisements", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.text     "description"
    t.string   "web_url"
    t.datetime "start_date"
    t.datetime "end_date"
    t.json     "images"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "status",      default: "inactive"
  end

  create_table "cities", force: :cascade do |t|
    t.string   "city",       limit: 200, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "devise_infos", force: :cascade do |t|
    t.string   "devise_id",  limit: 100
    t.string   "gcm_key",    limit: 500
    t.string   "apn_key",    limit: 500
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_id"
  end

  create_table "order_product_details", force: :cascade do |t|
    t.integer  "order_id"
    t.integer  "product_id"
    t.integer  "quantity"
    t.decimal  "price",      precision: 5, scale: 2
    t.decimal  "sub_total"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "dealer_id"
    t.integer  "order_no"
    t.decimal  "total_amount", precision: 5, scale: 2
    t.datetime "date"
    t.integer  "status"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "product_details", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "product_name",   limit: 500
    t.string   "product_code",   limit: 500
    t.string   "grade",          limit: 200
    t.string   "formula",        limit: 200
    t.string   "molar_mass"
    t.string   "image_url"
    t.json     "product_images"
    t.boolean  "status",                     default: true, null: false
    t.datetime "deleted_at"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
  end

  add_index "product_details", ["deleted_at"], name: "index_product_details_on_deleted_at", using: :btree
  add_index "product_details", ["user_id"], name: "index_product_details_on_user_id", using: :btree

  create_table "product_pricings", force: :cascade do |t|
    t.integer "product_detail_id"
    t.string  "pakaging",          limit: 100
    t.float   "price"
  end

  add_index "product_pricings", ["product_detail_id"], name: "index_product_pricings_on_product_detail_id", using: :btree

  create_table "products", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "product_name",    limit: 500
    t.string   "product_code",    limit: 500
    t.string   "grade",           limit: 200
    t.string   "formula",         limit: 200
    t.string   "molar_mass"
    t.string   "image_url"
    t.boolean  "status",                      default: true, null: false
    t.string   "pakaging",        limit: 100
    t.float    "price"
    t.json     "chemical_images"
    t.datetime "deleted_at"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string   "role_type",  limit: 50, null: false
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "user_profiles", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "city_id"
    t.string   "name",         limit: 250
    t.string   "address",      limit: 500
    t.string   "company_code", limit: 250
    t.string   "fax",          limit: 250
    t.string   "avatar"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "user_profiles", ["city_id"], name: "index_user_profiles_on_city_id", using: :btree
  add_index "user_profiles", ["user_id"], name: "index_user_profiles_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                              default: "",   null: false
    t.string   "encrypted_password",                 default: "",   null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                      default: 0,    null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "user_name",              limit: 250,                null: false
    t.string   "mobile_no",              limit: 250
    t.integer  "role_id",                                           null: false
    t.boolean  "status",                             default: true, null: false
    t.datetime "deleted_at"
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
  end

  add_index "users", ["deleted_at"], name: "index_users_on_deleted_at", using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["mobile_no"], name: "index_users_on_mobile_no", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["user_name"], name: "index_users_on_user_name", unique: true, using: :btree

end
