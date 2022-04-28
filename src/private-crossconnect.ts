// https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateCrossconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The desired description for the private cross-connect
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#description PrivateCrossconnect#description}
  */
  readonly description?: string;
  /**
  * The desired name for the private cross-connect
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#name PrivateCrossconnect#name}
  */
  readonly name: string;
  /**
  * connectable_datacenters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#connectable_datacenters PrivateCrossconnect#connectable_datacenters}
  */
  readonly connectableDatacenters?: PrivateCrossconnectConnectableDatacenters[] | cdktf.IResolvable;
  /**
  * peers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#peers PrivateCrossconnect#peers}
  */
  readonly peers?: PrivateCrossconnectPeers[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#timeouts PrivateCrossconnect#timeouts}
  */
  readonly timeouts?: PrivateCrossconnectTimeouts;
}
export interface PrivateCrossconnectConnectableDatacenters {
}

export function privateCrossconnectConnectableDatacentersToTerraform(struct?: PrivateCrossconnectConnectableDatacenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface PrivateCrossconnectPeers {
}

export function privateCrossconnectPeersToTerraform(struct?: PrivateCrossconnectPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface PrivateCrossconnectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#create PrivateCrossconnect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#default PrivateCrossconnect#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#delete PrivateCrossconnect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect#update PrivateCrossconnect#update}
  */
  readonly update?: string;
}

export function privateCrossconnectTimeoutsToTerraform(struct?: PrivateCrossconnectTimeoutsOutputReference | PrivateCrossconnectTimeouts | cdktf.IResolvable): any {
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

export class PrivateCrossconnectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateCrossconnectTimeouts | undefined {
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

  public set internalValue(value: PrivateCrossconnectTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect ionoscloud_private_crossconnect}
*/
export class PrivateCrossconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_private_crossconnect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/r/private_crossconnect ionoscloud_private_crossconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateCrossconnectConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateCrossconnectConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_private_crossconnect',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.2.3',
        providerVersionConstraint: '~> 6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._connectableDatacenters = config.connectableDatacenters;
    this._peers = config.peers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // connectable_datacenters - computed: false, optional: true, required: false
  private _connectableDatacenters?: PrivateCrossconnectConnectableDatacenters[] | cdktf.IResolvable; 
  public get connectableDatacenters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connectable_datacenters');
  }
  public set connectableDatacenters(value: PrivateCrossconnectConnectableDatacenters[] | cdktf.IResolvable) {
    this._connectableDatacenters = value;
  }
  public resetConnectableDatacenters() {
    this._connectableDatacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectableDatacentersInput() {
    return this._connectableDatacenters;
  }

  // peers - computed: false, optional: true, required: false
  private _peers?: PrivateCrossconnectPeers[] | cdktf.IResolvable; 
  public get peers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('peers');
  }
  public set peers(value: PrivateCrossconnectPeers[] | cdktf.IResolvable) {
    this._peers = value;
  }
  public resetPeers() {
    this._peers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateCrossconnectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateCrossconnectTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      connectable_datacenters: cdktf.listMapper(privateCrossconnectConnectableDatacentersToTerraform)(this._connectableDatacenters),
      peers: cdktf.listMapper(privateCrossconnectPeersToTerraform)(this._peers),
      timeouts: privateCrossconnectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
