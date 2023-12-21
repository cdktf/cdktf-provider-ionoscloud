# `networkloadbalancerForwardingrule` Submodule <a name="`networkloadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkloadbalancerForwardingrule <a name="NetworkloadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule ionoscloud_networkloadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  datacenter_id: str,
  listener_ip: str,
  listener_port: typing.Union[int, float],
  name: str,
  networkloadbalancer_id: str,
  protocol: str,
  targets: typing.Union[IResolvable, typing.List[NetworkloadbalancerForwardingruleTargets]],
  health_check: NetworkloadbalancerForwardingruleHealthCheck = None,
  id: str = None,
  timeouts: NetworkloadbalancerForwardingruleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Algorithm for the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.listenerIp">listener_ip</a></code> | <code>str</code> | Listening IP. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | Listening port number. (inbound) (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.name">name</a></code> | <code>str</code> | A name of that Network Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.networkloadbalancerId">networkloadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Protocol of the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.algorithm"></a>

- *Type:* str

Algorithm for the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#algorithm NetworkloadbalancerForwardingrule#algorithm}

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}.

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.listenerIp"></a>

- *Type:* str

Listening IP. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#listener_ip NetworkloadbalancerForwardingrule#listener_ip}

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.listenerPort"></a>

- *Type:* typing.Union[int, float]

Listening port number. (inbound) (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#listener_port NetworkloadbalancerForwardingrule#listener_port}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.name"></a>

- *Type:* str

A name of that Network Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#name NetworkloadbalancerForwardingrule#name}

---

##### `networkloadbalancer_id`<sup>Required</sup> <a name="networkloadbalancer_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.networkloadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.protocol"></a>

- *Type:* str

Protocol of the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#protocol NetworkloadbalancerForwardingrule#protocol}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.targets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#targets NetworkloadbalancerForwardingrule#targets}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#timeouts NetworkloadbalancerForwardingrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck"></a>

```python
def put_health_check(
  client_timeout: typing.Union[int, float] = None,
  connect_timeout: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  target_timeout: typing.Union[int, float] = None
) -> None
```

###### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck.parameter.clientTimeout"></a>

- *Type:* typing.Union[int, float]

ClientTimeout is expressed in milliseconds.

This inactivity timeout applies when the client is expected to acknowledge or send data. If unset the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#client_timeout NetworkloadbalancerForwardingrule#client_timeout}

---

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed.

If unset, the default of 5 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#connect_timeout NetworkloadbalancerForwardingrule#connect_timeout}

---

###### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Retries specifies the number of retries to perform on a target VM after a connection failure.

If unset, the default value of 3 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#retries NetworkloadbalancerForwardingrule#retries}

---

###### `target_timeout`<sup>Optional</sup> <a name="target_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck.parameter.targetTimeout"></a>

- *Type:* typing.Union[int, float]

TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side.

If unset, the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#target_timeout NetworkloadbalancerForwardingrule#target_timeout}

---

##### `put_targets` <a name="put_targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets"></a>

```python
def put_targets(
  value: typing.Union[IResolvable, typing.List[NetworkloadbalancerForwardingruleTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}.

---

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkloadbalancerForwardingrule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkloadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkloadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference">NetworkloadbalancerForwardingruleHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList">NetworkloadbalancerForwardingruleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference">NetworkloadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIpInput">listener_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPortInput">listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput">networkloadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targetsInput">targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIp">listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerId">networkloadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheck"></a>

```python
health_check: NetworkloadbalancerForwardingruleHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference">NetworkloadbalancerForwardingruleHealthCheckOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targets"></a>

```python
targets: NetworkloadbalancerForwardingruleTargetsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList">NetworkloadbalancerForwardingruleTargetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeouts"></a>

```python
timeouts: NetworkloadbalancerForwardingruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference">NetworkloadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheckInput"></a>

```python
health_check_input: NetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_ip_input`<sup>Optional</sup> <a name="listener_ip_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIpInput"></a>

```python
listener_ip_input: str
```

- *Type:* str

---

##### `listener_port_input`<sup>Optional</sup> <a name="listener_port_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPortInput"></a>

```python
listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkloadbalancer_id_input`<sup>Optional</sup> <a name="networkloadbalancer_id_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput"></a>

```python
networkloadbalancer_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targetsInput"></a>

```python
targets_input: typing.Union[IResolvable, typing.List[NetworkloadbalancerForwardingruleTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkloadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIp"></a>

```python
listener_ip: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networkloadbalancer_id`<sup>Required</sup> <a name="networkloadbalancer_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerId"></a>

```python
networkloadbalancer_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkloadbalancerForwardingruleConfig <a name="NetworkloadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  datacenter_id: str,
  listener_ip: str,
  listener_port: typing.Union[int, float],
  name: str,
  networkloadbalancer_id: str,
  protocol: str,
  targets: typing.Union[IResolvable, typing.List[NetworkloadbalancerForwardingruleTargets]],
  health_check: NetworkloadbalancerForwardingruleHealthCheck = None,
  id: str = None,
  timeouts: NetworkloadbalancerForwardingruleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Algorithm for the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerIp">listener_ip</a></code> | <code>str</code> | Listening IP. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | Listening port number. (inbound) (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.name">name</a></code> | <code>str</code> | A name of that Network Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId">networkloadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.protocol">protocol</a></code> | <code>str</code> | Protocol of the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Algorithm for the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#algorithm NetworkloadbalancerForwardingrule#algorithm}

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}.

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerIp"></a>

```python
listener_ip: str
```

- *Type:* str

Listening IP. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#listener_ip NetworkloadbalancerForwardingrule#listener_ip}

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Listening port number. (inbound) (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#listener_port NetworkloadbalancerForwardingrule#listener_port}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name of that Network Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#name NetworkloadbalancerForwardingrule#name}

---

##### `networkloadbalancer_id`<sup>Required</sup> <a name="networkloadbalancer_id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId"></a>

```python
networkloadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Protocol of the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#protocol NetworkloadbalancerForwardingrule#protocol}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.targets"></a>

```python
targets: typing.Union[IResolvable, typing.List[NetworkloadbalancerForwardingruleTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#targets NetworkloadbalancerForwardingrule#targets}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.healthCheck"></a>

```python
health_check: NetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.timeouts"></a>

```python
timeouts: NetworkloadbalancerForwardingruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#timeouts NetworkloadbalancerForwardingrule#timeouts}

---

### NetworkloadbalancerForwardingruleHealthCheck <a name="NetworkloadbalancerForwardingruleHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck(
  client_timeout: typing.Union[int, float] = None,
  connect_timeout: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  target_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | ClientTimeout is expressed in milliseconds. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Retries specifies the number of retries to perform on a target VM after a connection failure. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.targetTimeout">target_timeout</a></code> | <code>typing.Union[int, float]</code> | TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side. |

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ClientTimeout is expressed in milliseconds.

This inactivity timeout applies when the client is expected to acknowledge or send data. If unset the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#client_timeout NetworkloadbalancerForwardingrule#client_timeout}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed.

If unset, the default of 5 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#connect_timeout NetworkloadbalancerForwardingrule#connect_timeout}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Retries specifies the number of retries to perform on a target VM after a connection failure.

If unset, the default value of 3 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#retries NetworkloadbalancerForwardingrule#retries}

---

##### `target_timeout`<sup>Optional</sup> <a name="target_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.targetTimeout"></a>

```python
target_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side.

If unset, the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#target_timeout NetworkloadbalancerForwardingrule#target_timeout}

---

### NetworkloadbalancerForwardingruleTargets <a name="NetworkloadbalancerForwardingruleTargets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets(
  ip: str,
  port: typing.Union[int, float],
  weight: typing.Union[int, float],
  health_check: NetworkloadbalancerForwardingruleTargetsHealthCheck = None,
  proxy_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.ip">ip</a></code> | <code>str</code> | IP of a balanced target VM. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port of the balanced target service. (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight parameter is used to adjust the target VM's weight relative to other target VMs. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.proxyProtocol">proxy_protocol</a></code> | <code>str</code> | Proxy protocol version. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.ip"></a>

```python
ip: str
```

- *Type:* str

IP of a balanced target VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#ip NetworkloadbalancerForwardingrule#ip}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port of the balanced target service. (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#port NetworkloadbalancerForwardingrule#port}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight parameter is used to adjust the target VM's weight relative to other target VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#weight NetworkloadbalancerForwardingrule#weight}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.healthCheck"></a>

```python
health_check: NetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `proxy_protocol`<sup>Optional</sup> <a name="proxy_protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.proxyProtocol"></a>

```python
proxy_protocol: str
```

- *Type:* str

Proxy protocol version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#proxy_protocol NetworkloadbalancerForwardingrule#proxy_protocol}

---

### NetworkloadbalancerForwardingruleTargetsHealthCheck <a name="NetworkloadbalancerForwardingruleTargetsHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck(
  check: typing.Union[bool, IResolvable] = None,
  check_interval: typing.Union[int, float] = None,
  maintenance: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.check">check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check specifies whether the target VM's health is checked. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.checkInterval">check_interval</a></code> | <code>typing.Union[int, float]</code> | CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.maintenance">maintenance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Maintenance specifies if a target VM should be marked as down, even if it is not. |

---

##### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.check"></a>

```python
check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check specifies whether the target VM's health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#check NetworkloadbalancerForwardingrule#check}

---

##### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.checkInterval"></a>

```python
check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#check_interval NetworkloadbalancerForwardingrule#check_interval}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.maintenance"></a>

```python
maintenance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Maintenance specifies if a target VM should be marked as down, even if it is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#maintenance NetworkloadbalancerForwardingrule#maintenance}

---

### NetworkloadbalancerForwardingruleTimeouts <a name="NetworkloadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkloadbalancerForwardingruleHealthCheckOutputReference <a name="NetworkloadbalancerForwardingruleHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetClientTimeout">reset_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetTargetTimeout">reset_target_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_timeout` <a name="reset_client_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetClientTimeout"></a>

```python
def reset_client_timeout() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_target_timeout` <a name="reset_target_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetTargetTimeout"></a>

```python
def reset_target_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeoutInput">client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeoutInput">target_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout">target_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_timeout_input`<sup>Optional</sup> <a name="client_timeout_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeoutInput"></a>

```python
client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_timeout_input`<sup>Optional</sup> <a name="target_timeout_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeoutInput"></a>

```python
target_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_timeout`<sup>Required</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_timeout`<sup>Required</sup> <a name="target_timeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout"></a>

```python
target_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: NetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---


### NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference <a name="NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheck">reset_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheckInterval">reset_check_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetMaintenance">reset_maintenance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check` <a name="reset_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheck"></a>

```python
def reset_check() -> None
```

##### `reset_check_interval` <a name="reset_check_interval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheckInterval"></a>

```python
def reset_check_interval() -> None
```

##### `reset_maintenance` <a name="reset_maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetMaintenance"></a>

```python
def reset_maintenance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInput">check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkIntervalInput">check_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenanceInput">maintenance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check">check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval">check_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance">maintenance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_input`<sup>Optional</sup> <a name="check_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInput"></a>

```python
check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_interval_input`<sup>Optional</sup> <a name="check_interval_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkIntervalInput"></a>

```python
check_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_input`<sup>Optional</sup> <a name="maintenance_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenanceInput"></a>

```python
maintenance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check"></a>

```python
check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_interval`<sup>Required</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval"></a>

```python
check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance"></a>

```python
maintenance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: NetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---


### NetworkloadbalancerForwardingruleTargetsList <a name="NetworkloadbalancerForwardingruleTargetsList" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkloadbalancerForwardingruleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkloadbalancerForwardingruleTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]]

---


### NetworkloadbalancerForwardingruleTargetsOutputReference <a name="NetworkloadbalancerForwardingruleTargetsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetProxyProtocol">reset_proxy_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck"></a>

```python
def put_health_check(
  check: typing.Union[bool, IResolvable] = None,
  check_interval: typing.Union[int, float] = None,
  maintenance: typing.Union[bool, IResolvable] = None
) -> None
```

###### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck.parameter.check"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check specifies whether the target VM's health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#check NetworkloadbalancerForwardingrule#check}

---

###### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck.parameter.checkInterval"></a>

- *Type:* typing.Union[int, float]

CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#check_interval NetworkloadbalancerForwardingrule#check_interval}

---

###### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck.parameter.maintenance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Maintenance specifies if a target VM should be marked as down, even if it is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#maintenance NetworkloadbalancerForwardingrule#maintenance}

---

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_proxy_protocol` <a name="reset_proxy_protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetProxyProtocol"></a>

```python
def reset_proxy_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference">NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocolInput">proxy_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol">proxy_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck"></a>

```python
health_check: NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference">NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference</a>

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheckInput"></a>

```python
health_check_input: NetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_protocol_input`<sup>Optional</sup> <a name="proxy_protocol_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocolInput"></a>

```python
proxy_protocol_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_protocol`<sup>Required</sup> <a name="proxy_protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol"></a>

```python
proxy_protocol: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkloadbalancerForwardingruleTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets">NetworkloadbalancerForwardingruleTargets</a>]

---


### NetworkloadbalancerForwardingruleTimeoutsOutputReference <a name="NetworkloadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer_forwardingrule

networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkloadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>]

---



