// https://www.terraform.io/docs/providers/ionoscloud/r/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#active User#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#administrator User#administrator}
  */
  readonly administrator?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#force_sec_auth User#force_sec_auth}
  */
  readonly forceSecAuth?: boolean | cdktf.IResolvable;
  /**
  * Ids of the groups that the user is a member of
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#group_ids User#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#password User#password}
  */
  readonly password: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#timeouts User#timeouts}
  */
  readonly timeouts?: UserTimeouts;
}
export interface UserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#create User#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#default User#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#delete User#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/user#update User#update}
  */
  readonly update?: string;
}

export function userTimeoutsToTerraform(struct?: UserTimeoutsOutputReference | UserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class UserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/user ionoscloud_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/r/user ionoscloud_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_user',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.2.5',
        providerVersionConstraint: '~> 6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._administrator = config.administrator;
    this._email = config.email;
    this._firstName = config.firstName;
    this._forceSecAuth = config.forceSecAuth;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._lastName = config.lastName;
    this._password = config.password;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // administrator - computed: false, optional: true, required: false
  private _administrator?: boolean | cdktf.IResolvable; 
  public get administrator() {
    return this.getBooleanAttribute('administrator');
  }
  public set administrator(value: boolean | cdktf.IResolvable) {
    this._administrator = value;
  }
  public resetAdministrator() {
    this._administrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorInput() {
    return this._administrator;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // force_sec_auth - computed: false, optional: true, required: false
  private _forceSecAuth?: boolean | cdktf.IResolvable; 
  public get forceSecAuth() {
    return this.getBooleanAttribute('force_sec_auth');
  }
  public set forceSecAuth(value: boolean | cdktf.IResolvable) {
    this._forceSecAuth = value;
  }
  public resetForceSecAuth() {
    this._forceSecAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSecAuthInput() {
    return this._forceSecAuth;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // s3_canonical_user_id - computed: true, optional: false, required: false
  public get s3CanonicalUserId() {
    return this.getStringAttribute('s3_canonical_user_id');
  }

  // sec_auth_active - computed: true, optional: false, required: false
  public get secAuthActive() {
    return this.getBooleanAttribute('sec_auth_active');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      administrator: cdktf.booleanToTerraform(this._administrator),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      force_sec_auth: cdktf.booleanToTerraform(this._forceSecAuth),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      password: cdktf.stringToTerraform(this._password),
      timeouts: userTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
