# `natgatewayRule` Submodule <a name="`natgatewayRule` Submodule" id="@cdktf/provider-ionoscloud.natgatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NatgatewayRule <a name="NatgatewayRule" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule ionoscloud_natgateway_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NatgatewayRule(Construct Scope, string Id, NatgatewayRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig">NatgatewayRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig">NatgatewayRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange">PutTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetPortRange">ResetTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetSubnet">ResetTargetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetPortRange` <a name="PutTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange"></a>

```csharp
private void PutTargetPortRange(NatgatewayRuleTargetPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts"></a>

```csharp
private void PutTimeouts(NatgatewayRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTargetPortRange` <a name="ResetTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetPortRange"></a>

```csharp
private void ResetTargetPortRange()
```

##### `ResetTargetSubnet` <a name="ResetTargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetSubnet"></a>

```csharp
private void ResetTargetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NatgatewayRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NatgatewayRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NatgatewayRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NatgatewayRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NatgatewayRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NatgatewayRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NatgatewayRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NatgatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NatgatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRange">TargetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference">NatgatewayRuleTargetPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference">NatgatewayRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayIdInput">NatgatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIpInput">PublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnetInput">SourceSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRangeInput">TargetPortRangeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnetInput">TargetSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayId">NatgatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnet">SourceSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnet">TargetSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TargetPortRange`<sup>Required</sup> <a name="TargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRange"></a>

```csharp
public NatgatewayRuleTargetPortRangeOutputReference TargetPortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference">NatgatewayRuleTargetPortRangeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeouts"></a>

```csharp
public NatgatewayRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference">NatgatewayRuleTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatgatewayIdInput`<sup>Optional</sup> <a name="NatgatewayIdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayIdInput"></a>

```csharp
public string NatgatewayIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `PublicIpInput`<sup>Optional</sup> <a name="PublicIpInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIpInput"></a>

```csharp
public string PublicIpInput { get; }
```

- *Type:* string

---

##### `SourceSubnetInput`<sup>Optional</sup> <a name="SourceSubnetInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnetInput"></a>

```csharp
public string SourceSubnetInput { get; }
```

- *Type:* string

---

##### `TargetPortRangeInput`<sup>Optional</sup> <a name="TargetPortRangeInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRangeInput"></a>

```csharp
public NatgatewayRuleTargetPortRange TargetPortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---

##### `TargetSubnetInput`<sup>Optional</sup> <a name="TargetSubnetInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnetInput"></a>

```csharp
public string TargetSubnetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatgatewayId`<sup>Required</sup> <a name="NatgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayId"></a>

```csharp
public string NatgatewayId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `SourceSubnet`<sup>Required</sup> <a name="SourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnet"></a>

```csharp
public string SourceSubnet { get; }
```

- *Type:* string

---

##### `TargetSubnet`<sup>Required</sup> <a name="TargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnet"></a>

```csharp
public string TargetSubnet { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NatgatewayRuleConfig <a name="NatgatewayRuleConfig" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NatgatewayRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatacenterId,
    string Name,
    string NatgatewayId,
    string PublicIp,
    string SourceSubnet,
    string Id = null,
    string Protocol = null,
    NatgatewayRuleTargetPortRange TargetPortRange = null,
    string TargetSubnet = null,
    NatgatewayRuleTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.natgatewayId">NatgatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.publicIp">PublicIp</a></code> | <code>string</code> | Public IP address of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.sourceSubnet">SourceSubnet</a></code> | <code>string</code> | Source subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#id NatgatewayRule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Protocol of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetPortRange">TargetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | target_port_range block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetSubnet">TargetSubnet</a></code> | <code>string</code> | Target or destination subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.type">Type</a></code> | <code>string</code> | Type of the NAT gateway rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#name NatgatewayRule#name}

---

##### `NatgatewayId`<sup>Required</sup> <a name="NatgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.natgatewayId"></a>

```csharp
public string NatgatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}.

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.publicIp"></a>

```csharp
public string PublicIp { get; set; }
```

- *Type:* string

Public IP address of the NAT gateway rule.

Specifies the address used for masking outgoing packets source address field. Should be one of the customer reserved IP address already configured on the NAT gateway resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#public_ip NatgatewayRule#public_ip}

---

##### `SourceSubnet`<sup>Required</sup> <a name="SourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.sourceSubnet"></a>

```csharp
public string SourceSubnet { get; set; }
```

- *Type:* string

Source subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#source_subnet NatgatewayRule#source_subnet}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#id NatgatewayRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Protocol of the NAT gateway rule.

Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#protocol NatgatewayRule#protocol}

---

##### `TargetPortRange`<sup>Optional</sup> <a name="TargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetPortRange"></a>

```csharp
public NatgatewayRuleTargetPortRange TargetPortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

target_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#target_port_range NatgatewayRule#target_port_range}

---

##### `TargetSubnet`<sup>Optional</sup> <a name="TargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetSubnet"></a>

```csharp
public string TargetSubnet { get; set; }
```

- *Type:* string

Target or destination subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets destination IP address. If none is provided, rule will match any address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#target_subnet NatgatewayRule#target_subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.timeouts"></a>

```csharp
public NatgatewayRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#timeouts NatgatewayRule#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#type NatgatewayRule#type}

---

### NatgatewayRuleTargetPortRange <a name="NatgatewayRuleTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NatgatewayRuleTargetPortRange {
    double End = null,
    double Start = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.end">End</a></code> | <code>double</code> | Target port range end associated with the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.start">Start</a></code> | <code>double</code> | Target port range start associated with the NAT gateway rule. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Target port range end associated with the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#end NatgatewayRule#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Target port range start associated with the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#start NatgatewayRule#start}

---

### NatgatewayRuleTimeouts <a name="NatgatewayRuleTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NatgatewayRuleTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#create NatgatewayRule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#default NatgatewayRule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#delete NatgatewayRule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#update NatgatewayRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#create NatgatewayRule#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#default NatgatewayRule#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#delete NatgatewayRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/natgateway_rule#update NatgatewayRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NatgatewayRuleTargetPortRangeOutputReference <a name="NatgatewayRuleTargetPortRangeOutputReference" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NatgatewayRuleTargetPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetStart"></a>

```csharp
private void ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.internalValue"></a>

```csharp
public NatgatewayRuleTargetPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---


### NatgatewayRuleTimeoutsOutputReference <a name="NatgatewayRuleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NatgatewayRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



