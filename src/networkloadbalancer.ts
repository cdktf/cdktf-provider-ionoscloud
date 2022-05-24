// https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkloadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#id Networkloadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Collection of IP addresses of the Network Load Balancer. (inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public load balancer and private IP for the private load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#ips Networkloadbalancer#ips}
  */
  readonly ips?: string[];
  /**
  * Collection of private IP addresses with subnet mask of the Network Load Balancer. IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#lb_private_ips Networkloadbalancer#lb_private_ips}
  */
  readonly lbPrivateIps?: string[];
  /**
  * Id of the listening LAN. (inbound)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#listener_lan Networkloadbalancer#listener_lan}
  */
  readonly listenerLan: number;
  /**
  * A name of that Network Load Balancer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#name Networkloadbalancer#name}
  */
  readonly name: string;
  /**
  * Id of the balanced private target LAN. (outbound)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#target_lan Networkloadbalancer#target_lan}
  */
  readonly targetLan: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#timeouts Networkloadbalancer#timeouts}
  */
  readonly timeouts?: NetworkloadbalancerTimeouts;
}
export interface NetworkloadbalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#create Networkloadbalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#default Networkloadbalancer#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#delete Networkloadbalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer#update Networkloadbalancer#update}
  */
  readonly update?: string;
}

export function networkloadbalancerTimeoutsToTerraform(struct?: NetworkloadbalancerTimeoutsOutputReference | NetworkloadbalancerTimeouts | cdktf.IResolvable): any {
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

export class NetworkloadbalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkloadbalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkloadbalancerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer ionoscloud_networkloadbalancer}
*/
export class Networkloadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_networkloadbalancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/r/networkloadbalancer ionoscloud_networkloadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkloadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkloadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_networkloadbalancer',
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
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._ips = config.ips;
    this._lbPrivateIps = config.lbPrivateIps;
    this._listenerLan = config.listenerLan;
    this._name = config.name;
    this._targetLan = config.targetLan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // lb_private_ips - computed: true, optional: true, required: false
  private _lbPrivateIps?: string[]; 
  public get lbPrivateIps() {
    return this.getListAttribute('lb_private_ips');
  }
  public set lbPrivateIps(value: string[]) {
    this._lbPrivateIps = value;
  }
  public resetLbPrivateIps() {
    this._lbPrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPrivateIpsInput() {
    return this._lbPrivateIps;
  }

  // listener_lan - computed: false, optional: false, required: true
  private _listenerLan?: number; 
  public get listenerLan() {
    return this.getNumberAttribute('listener_lan');
  }
  public set listenerLan(value: number) {
    this._listenerLan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerLanInput() {
    return this._listenerLan;
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

  // target_lan - computed: false, optional: false, required: true
  private _targetLan?: number; 
  public get targetLan() {
    return this.getNumberAttribute('target_lan');
  }
  public set targetLan(value: number) {
    this._targetLan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLanInput() {
    return this._targetLan;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkloadbalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkloadbalancerTimeouts) {
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
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(cdktf.stringToTerraform)(this._ips),
      lb_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._lbPrivateIps),
      listener_lan: cdktf.numberToTerraform(this._listenerLan),
      name: cdktf.stringToTerraform(this._name),
      target_lan: cdktf.numberToTerraform(this._targetLan),
      timeouts: networkloadbalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
