# `ionoscloud_networkloadbalancer`

Refer to the Terraform Registory for docs: [`ionoscloud_networkloadbalancer`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer).

# `networkloadbalancer` Submodule <a name="`networkloadbalancer` Submodule" id="@cdktf/provider-ionoscloud.networkloadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Networkloadbalancer <a name="Networkloadbalancer" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer ionoscloud_networkloadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.Networkloadbalancer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  listener_lan: typing.Union[int, float],
  name: str,
  target_lan: typing.Union[int, float],
  id: str = None,
  ips: typing.List[str] = None,
  lb_private_ips: typing.List[str] = None,
  timeouts: NetworkloadbalancerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.listenerLan">listener_lan</a></code> | <code>typing.Union[int, float]</code> | Id of the listening LAN. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.name">name</a></code> | <code>str</code> | A name of that Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.targetLan">target_lan</a></code> | <code>typing.Union[int, float]</code> | Id of the balanced private target LAN. (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#id Networkloadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.ips">ips</a></code> | <code>typing.List[str]</code> | Collection of IP addresses of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.lbPrivateIps">lb_private_ips</a></code> | <code>typing.List[str]</code> | Collection of private IP addresses with subnet mask of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}.

---

##### `listener_lan`<sup>Required</sup> <a name="listener_lan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.listenerLan"></a>

- *Type:* typing.Union[int, float]

Id of the listening LAN. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#listener_lan Networkloadbalancer#listener_lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.name"></a>

- *Type:* str

A name of that Network Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#name Networkloadbalancer#name}

---

##### `target_lan`<sup>Required</sup> <a name="target_lan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.targetLan"></a>

- *Type:* typing.Union[int, float]

Id of the balanced private target LAN. (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#target_lan Networkloadbalancer#target_lan}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#id Networkloadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.ips"></a>

- *Type:* typing.List[str]

Collection of IP addresses of the Network Load Balancer.

(inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public load balancer and private IP for the private load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#ips Networkloadbalancer#ips}

---

##### `lb_private_ips`<sup>Optional</sup> <a name="lb_private_ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.lbPrivateIps"></a>

- *Type:* typing.List[str]

Collection of private IP addresses with subnet mask of the Network Load Balancer.

IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#lb_private_ips Networkloadbalancer#lb_private_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#timeouts Networkloadbalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetIps">reset_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLbPrivateIps">reset_lb_private_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#create Networkloadbalancer#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#default Networkloadbalancer#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#update Networkloadbalancer#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ips` <a name="reset_ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetIps"></a>

```python
def reset_ips() -> None
```

##### `reset_lb_private_ips` <a name="reset_lb_private_ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLbPrivateIps"></a>

```python
def reset_lb_private_ips() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.Networkloadbalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.Networkloadbalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.Networkloadbalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference">NetworkloadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIpsInput">lb_private_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLanInput">listener_lan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLanInput">target_lan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIps">lb_private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLan">listener_lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLan">target_lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeouts"></a>

```python
timeouts: NetworkloadbalancerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference">NetworkloadbalancerTimeoutsOutputReference</a>

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lb_private_ips_input`<sup>Optional</sup> <a name="lb_private_ips_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIpsInput"></a>

```python
lb_private_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_lan_input`<sup>Optional</sup> <a name="listener_lan_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLanInput"></a>

```python
listener_lan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_lan_input`<sup>Optional</sup> <a name="target_lan_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLanInput"></a>

```python
target_lan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkloadbalancerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lb_private_ips`<sup>Required</sup> <a name="lb_private_ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIps"></a>

```python
lb_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_lan`<sup>Required</sup> <a name="listener_lan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLan"></a>

```python
listener_lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_lan`<sup>Required</sup> <a name="target_lan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLan"></a>

```python
target_lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkloadbalancerConfig <a name="NetworkloadbalancerConfig" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.NetworkloadbalancerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  listener_lan: typing.Union[int, float],
  name: str,
  target_lan: typing.Union[int, float],
  id: str = None,
  ips: typing.List[str] = None,
  lb_private_ips: typing.List[str] = None,
  timeouts: NetworkloadbalancerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.listenerLan">listener_lan</a></code> | <code>typing.Union[int, float]</code> | Id of the listening LAN. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.name">name</a></code> | <code>str</code> | A name of that Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.targetLan">target_lan</a></code> | <code>typing.Union[int, float]</code> | Id of the balanced private target LAN. (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#id Networkloadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.ips">ips</a></code> | <code>typing.List[str]</code> | Collection of IP addresses of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lbPrivateIps">lb_private_ips</a></code> | <code>typing.List[str]</code> | Collection of private IP addresses with subnet mask of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}.

---

##### `listener_lan`<sup>Required</sup> <a name="listener_lan" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.listenerLan"></a>

```python
listener_lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Id of the listening LAN. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#listener_lan Networkloadbalancer#listener_lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name of that Network Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#name Networkloadbalancer#name}

---

##### `target_lan`<sup>Required</sup> <a name="target_lan" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.targetLan"></a>

```python
target_lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Id of the balanced private target LAN. (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#target_lan Networkloadbalancer#target_lan}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#id Networkloadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

Collection of IP addresses of the Network Load Balancer.

(inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public load balancer and private IP for the private load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#ips Networkloadbalancer#ips}

---

##### `lb_private_ips`<sup>Optional</sup> <a name="lb_private_ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lbPrivateIps"></a>

```python
lb_private_ips: typing.List[str]
```

- *Type:* typing.List[str]

Collection of private IP addresses with subnet mask of the Network Load Balancer.

IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#lb_private_ips Networkloadbalancer#lb_private_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.timeouts"></a>

```python
timeouts: NetworkloadbalancerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#timeouts Networkloadbalancer#timeouts}

---

### NetworkloadbalancerTimeouts <a name="NetworkloadbalancerTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.NetworkloadbalancerTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#create Networkloadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#default Networkloadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#update Networkloadbalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#create Networkloadbalancer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#default Networkloadbalancer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.1/docs/resources/networkloadbalancer#update Networkloadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkloadbalancerTimeoutsOutputReference <a name="NetworkloadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import networkloadbalancer

networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkloadbalancerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>]

---



